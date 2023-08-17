import { useAgent, useConnections } from '@aries-framework/react-hooks'
import { useNavigation } from '@react-navigation/core'
import {
  Stacks,
  Screens,
  Agent,
  AgentProvider,
  AuthProvider,
  toastConfig,
  initStoredLanguage,
  RootStack,
  NetInfo,
  NetworkProvider,
  ErrorModal,
  StoreProvider,
  ThemeProvider,
  ConfigurationProvider,
  initLanguages,
  testIdWithKey,
} from 'aries-bifold'
import React, { useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Linking, StatusBar, View, Button, TextInput,Text, NativeModules } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Toast from 'react-native-toast-message'

import { connectFromInvitation } from '../bifold/core/App/utils/helpers'

import bcwallet from './src'
import { initialState, reducer } from './src/store'

const { theme, localization, configuration } = bcwallet
const { APIModule } = NativeModules;
initLanguages(localization)

const App = ({android_input}:any) => {
  useMemo(() => {
    initStoredLanguage().then()
  }, [])

  const [agent] = useState<Agent | undefined>(undefined)
  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const helpLink = 'https://www2.gov.bc.ca/gov/content/governments/government-id/bc-wallet/help'

  const SendMessageComponent = () => {
    const { records } = useConnections();
    const agentInstance = useAgent();

    const handleSendMessage = async () => {
      if (records && records.length > 0) {
        const connectionId = records[0].id;
        const message = "Hello! This is a test message.";
        if (agentInstance) {
          // TODO fix this, lots of errors
          await agentInstance.agent?.basicMessages.sendMessage(connectionId, message);
        } else {
          console.error("Agent not initialized.");
        }
      }
    };

    return (
      <View>
        <Button title="Send Test Message" onPress={handleSendMessage} />
      </View>
    );
  };

  const ConnectFromUriComponent = () => {
    const [invitationUri, setInvitationUri] = useState('');
    const agentInstance = useAgent();
  
    const handleConnect = async () => {
      try {
        if (invitationUri && agentInstance) {
          const connectionRecord = await connectFromInvitation(invitationUri, agentInstance.agent);
          console.log('Connection established:', connectionRecord);
        } else {
          console.error('Invalid invitation URI or agent not initialized.');
        }
      } catch (error) {
        console.error('Error connecting from invitation:', error);
      }
    };
  
    return (
      <View>
        <TextInput
          onChangeText={setInvitationUri}
          value={invitationUri}
          placeholder="Enter invitation URI"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Connect" onPress={handleConnect} />
      </View>
    );
  };

  const MessageFromAndroidComponent  = ({ android_input }:any) => {
    const { records } = useConnections();
    const agentInstance = useAgent();
    const [messageStatus, setMessageStatus] = useState(""); // State to keep track of message status.
  
    const handleSendMessage = async () => {
      if (records && records.length > 0) {
        const connectionId = records[0].id;
        const message = android_input;
        if (agentInstance) {
          try {
            await agentInstance.agent?.basicMessages.sendMessage(connectionId, message);
            setMessageStatus("Message sent successfully!"); // Update the status if message is sent.
          } catch(error) {
            console.error("Failed to send message.", error);
            setMessageStatus("Failed to send message."); // Update the status if sending fails.
          }
        } else {
          console.error("Agent not initialized.");
          setMessageStatus("Agent not initialized."); // Update the status if agent is not initialized.
        }
      }
    };
  
    useEffect(() => {
      if (android_input) { // Check if android_input is not null or empty.
        handleSendMessage();
      }
    }, [android_input]); // Only run the effect when android_input changes.
  
    return (
      <View>
         {android_input ? <Text>{android_input}</Text> : null}  {/* This will only render if android_input has a value */}
         <Text>Status: {String(messageStatus)}</Text>
 {/* Display the status message. */}
      </View>
    );
  }

  const settings = [
    {
      header: {
        title: t('Settings.Help'),
        icon: 'help',
      },
      data: [
        {
          title: t('Settings.HelpUsingBCWallet'),
          accessibilityLabeL: t('Settings.HelpUsingBCWallet'),
          testID: testIdWithKey('HelpUsingBCWallet'),
          onPress: () => Linking.openURL(helpLink),
        },
      ],
    },
    {
      header: {
        title: t('Settings.MoreInformation'),
        icon: 'info',
      },
      data: [
        {
          title: t('Settings.TermsOfUse'),
          accessibilityLabel: t('Settings.TermsOfUse'),
          testID: testIdWithKey('TermsOfUse'),
          onPress: () => navigate(Stacks.SettingStack as never, { screen: Screens.Terms } as never),
        },
        {
          title: t('Settings.IntroductionToTheApp'),
          accessibilityLabel: t('Settings.IntroductionToTheApp'),
          testID: testIdWithKey('IntroductionToTheApp'),
          onPress: () => navigate(Stacks.SettingStack as never, { screen: Screens.Onboarding } as never),
        },
      ],
    },
  ]

  configuration.settings = settings

  useEffect(() => {
    // Hide the native splash / loading screen so that our
    // RN version can be displayed.
    SplashScreen.hide()
  }, [])

  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <AgentProvider agent={agent}>
        <ThemeProvider value={theme}>
          <ConfigurationProvider value={configuration}>
            <AuthProvider>
              <NetworkProvider>
                <StatusBar
                  barStyle="light-content"
                  hidden={false}
                  backgroundColor={theme.ColorPallet.brand.primary}
                  translucent={false}
                />
                <NetInfo />
                <ErrorModal />
                <RootStack />
                <Toast topOffset={15} config={toastConfig} />
                <View>
                 <MessageFromAndroidComponent android_input={android_input} />
                 <SendMessageComponent />
                 <ConnectFromUriComponent />
                </View>
              </NetworkProvider>
            </AuthProvider>
          </ConfigurationProvider>
        </ThemeProvider>
      </AgentProvider>
    </StoreProvider>
  )
}

export default App

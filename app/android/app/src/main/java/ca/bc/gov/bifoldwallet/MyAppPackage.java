package ca.bc.gov.BCWallet;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// https://reactnative.dev/docs/native-modules-android
public class MyAppPackage implements ReactPackage {
    private APIModule apiModule;
    private MainActivity mainActivity;

    public MyAppPackage(MainActivity mainActivity) {
        this.mainActivity = mainActivity;
    }

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        // add all modules you need to send to React Native
        apiModule = new APIModule(reactContext);
        apiModule.setMainActivity(mainActivity);
        modules.add(apiModule);
        return modules;

    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}

package ca.bc.gov.BCWallet;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

// https://reactnative.dev/docs/native-modules-android
public class APIModule extends ReactContextBaseJavaModule {
    private MainActivity mainActivity;

    APIModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        // name that React Native is used to import
        return "APIModule";
    }

    // APIModule needs to know mainActivity in order to call sendAction
    public void setMainActivity(MainActivity mainActivity) {
        Log.wtf("TAG", "setMainActivity");
        this.mainActivity = mainActivity;
    }

    // any function with @ReactMethod annotation can be called from React Native side
    @ReactMethod
    public void action(String key, String value) {
        if (mainActivity != null) {
            mainActivity.sendAction(key, value);
        }
    }
}

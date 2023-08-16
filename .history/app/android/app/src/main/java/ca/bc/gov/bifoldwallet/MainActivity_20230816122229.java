package ca.bc.gov.BCWallet;
import android.os.Bundle;
import android.system.ErrnoException;
import android.system.Os;
import java.io.File;
import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.constraintlayout.widget.ConstraintLayout;
import com.facebook.react.ReactActivity;
import com.facebook.react.PackageList;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.soloader.SoLoader;

import org.w3c.dom.Text;

import java.util.List;

public class MainActivity extends ReactActivity implements DefaultHardwareBackBtnHandler {

  private ReactRootView mReactRootView;
  private ReactInstanceManager mReactInstanceManager;
  private MyAppPackage myAppPackage;

  private EditText androidInput;
  private Button androidSubmit;
  private TextView reactOutput;
  private ConstraintLayout bottom;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      // Initialization logic from the second MainActivity
      try {
          Os.setenv("EXTERNAL_STORAGE", getExternalFilesDir(null).getAbsolutePath(), true);
          System.loadLibrary("indy");
      } catch (ErrnoException e) {
          e.printStackTrace();
      }

      androidInput = findViewById(R.id.android_input);
      androidSubmit = findViewById(R.id.android_submit);
      reactOutput = findViewById(R.id.react_output);
      bottom = findViewById(R.id.bottom);

      androidSubmit.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
              hideKeyboard();
              if (mReactRootView == null) {
                  return;
              }
              Bundle props = mReactRootView.getAppProperties();
              if (props == null) {
                  props = new Bundle();
              }
              props.putString("android_input", androidInput.getText().toString());
              mReactRootView.setAppProperties(props);
          }
      });

      SoLoader.init(this, false);
      mReactRootView = new ReactRootView(this);
      List<ReactPackage> packages = new PackageList(getApplication()).getPackages();
      myAppPackage = new MyAppPackage(this);
      packages.add(myAppPackage);
      mReactInstanceManager = ReactInstanceManager.builder()
              .setApplication(getApplication())
              .setCurrentActivity(this)
              .setBundleAssetName("index.android.bundle")
              .setJSMainModulePath("index")
              .addPackages(packages)
              .setUseDeveloperSupport(BuildConfig.DEBUG)
              .setInitialLifecycleState(LifecycleState.RESUMED)
              .build();
      mReactRootView.startReactApplication(mReactInstanceManager, "CrossPlatformAppV65", null);
      bottom.addView(mReactRootView);
  }

  protected String getMainComponentName() {
      return "BCWallet";
  }

  public void sendAction(String key, String value) {
      Log.wtf("TAG", key + " => " + value);
      runOnUiThread(new Runnable() {
          @Override
          public void run() {
              if(key.equals("react_input")) {
                  reactOutput.setText(value);
              }
          }
      });
  }

  public void hideKeyboard() {
      View view = this.getCurrentFocus();
      if (view != null) {
          InputMethodManager imm = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
          imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
      }
  }

  @Override
  public void invokeDefaultOnBackPressed() {
      super.onBackPressed();
  }

  @Override
  protected void onPause() {
      super.onPause();
      if (mReactInstanceManager != null) {
          mReactInstanceManager.onHostPause(this);
      }
  }

  @Override
  protected void onResume() {
      super.onResume();
      if (mReactInstanceManager != null) {
          mReactInstanceManager.onHostResume(this, this);
      }
  }

  @Override
  protected void onDestroy() {
      super.onDestroy();
      if (mReactInstanceManager != null) {
          mReactInstanceManager.onHostDestroy(this);
      }
      if (mReactRootView != null) {
          mReactRootView.unmountReactApplication();
      }
  }

  @Override
  public void onBackPressed() {
      if (mReactInstanceManager != null) {
          mReactInstanceManager.onBackPressed();
      } else {
          super.onBackPressed();
      }
  }

  @Override
  public boolean onKeyUp(int keyCode, KeyEvent event) {
      if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
          mReactInstanceManager.showDevOptionsDialog();
          return true;
      }
      return super.onKeyUp(keyCode, event);
  }
}
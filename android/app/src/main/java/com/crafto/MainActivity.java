package com.crafto;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
// screen shot preventing
import android.os.Bundle;
import android.view.WindowManager;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Crafto";
  }

// screen shot preventing
   @Override
   protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
     getWindow().setFlags(
       WindowManager.LayoutParams.FLAG_SECURE,
       WindowManager.LayoutParams.FLAG_SECURE
     );
   }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }


// @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         // Initialize spinners and other UI components
//         // colorSpinner = findViewById(R.id.colorSpinner);
//         // colorTextSpinner = findViewById(R.id.colorTextSpinner);

//         // Set up your SDK callback
//         // ITrueCallback sdkCallback = new ITrueCallback() {
//         //     @Override
//         //     public void onSuccessProfileShared(@NonNull TrueProfile trueProfile) {
//         //         // Handle successful profile sharing
//         //     }

//         //     @Override
//         //     public void onFailureProfileShared(@NonNull TrueError trueError) {
//         //         // Handle failed profile sharing
//         //     }

//         //     @Override
//         //     public void onVerificationRequired() {
//         //         // Handle verification required
//         //     }
//         // };

//         // Create a TruecallerSdkScope object with the desired configuration
//         TruecallerSdkScope trueScope = new TruecallerSdkScope.Builder(this, sdkCallback)
//                 .consentMode(TruecallerSdkScope.CONSENT_MODE_BOTTOMSHEET)
//                 .buttonColor(Color.parseColor(colorSpinner.getSelectedItem().toString()))
//                 .buttonTextColor(Color.parseColor(colorTextSpinner.getSelectedItem().toString()))
//                 .loginTextPrefix(TruecallerSdkScope.LOGIN_TEXT_PREFIX_TO_GET_STARTED)
//                 .loginTextSuffix(TruecallerSdkScope.LOGIN_TEXT_SUFFIX_PLEASE_VERIFY_MOBILE_NO)
//                 .ctaTextPrefix(TruecallerSdkScope.CTA_TEXT_PREFIX_USE)
//                 .buttonShapeOptions(TruecallerSdkScope.BUTTON_SHAPE_ROUNDED)
//                 .privacyPolicyUrl("<<YOUR_PRIVACY_POLICY_LINK>>")
//                 .termsOfServiceUrl("<<YOUR_PRIVACY_POLICY_LINK>>")
//                 .footerType(TruecallerSdkScope.FOOTER_TYPE_NONE)
//                 .consentTitleOption(TruecallerSdkScope.SDK_CONSENT_TITLE_LOG_IN)
//                 .sdkOptions(TruecallerSdkScope.SDK_OPTION_WITHOUT_OTP)
//                 .build();

//         // Initialize the Truecaller SDK
//         TruecallerSDK.init(trueScope);
//     }


}

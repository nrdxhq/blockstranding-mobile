import React, { useEffect } from 'react';
import { IonApp, IonContent } from '@ionic/react';
import { InAppBrowser, ToolbarPosition } from '@capacitor/inappbrowser';
import { Capacitor } from '@capacitor/core';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './App.css';

function App() {

  useEffect(() => {
    // Use InAppBrowser with hidden navigation and address toolbars
    if (Capacitor.isNativePlatform()) {
      // For mobile: Open in WebView without toolbars
      InAppBrowser.openInWebView({
        url: 'https://blockstranding.com',
        options: {
          showToolbar: false,
          showURL: false,
          showNavigationButtons: false,
          clearCache: true,
          clearSessionCache: true,
          closeButtonText: 'Done',
          toolbarPosition: ToolbarPosition.TOP,
          mediaPlaybackRequiresUserAction: false,
          leftToRight: true,
          android: {
            allowZoom: false,
            hardwareBack: true,
            pauseMedia: false
          },
          iOS: {
            allowOverScroll: false,
            enableViewportScale: false,
            allowInLineMediaPlayback: true,
            surpressIncrementalRendering: false,
            viewStyle: 'FULL_SCREEN' as any,
            animationEffect: 'COVER_VERTICAL' as any,
            allowsBackForwardNavigationGestures: false
          }
        }
      });
    } else {
      // For web: Direct redirect (no CORS issues)
      window.location.href = 'https://blockstranding.com';
    }
  }, []);

  return (
    <IonApp>
      <IonContent>
      </IonContent>
    </IonApp>
  );
}

export default App;

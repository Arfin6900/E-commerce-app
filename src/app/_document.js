// pages/_document.js or pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script>
          {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => {
                      console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch(error => {
                      console.log('Service Worker registration failed:', error);
                    });
                });
              }

              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                // Prevent the mini-infobar from appearing on mobile
                e.preventDefault();
                // Stash the event so it can be triggered later.
                deferredPrompt = e;
                // Update UI notify the user they can install the PWA
                showInstallPromotion();
              });

              function showInstallPromotion() {
                const installButton = document.createElement('button');
                installButton.textContent = 'Install PWA';
                installButton.style.position = 'fixed';
                installButton.style.bottom = '10px';
                installButton.style.left = '10px';
                installButton.style.zIndex = '1000';
                installButton.onclick = () => {
                  // Hide the app provided install promotion
                  installButton.style.display = 'none';
                  // Show the install prompt
                  deferredPrompt.prompt();
                  // Wait for the user to respond to the prompt
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                      console.log('User accepted the install prompt');
                    } else {
                      console.log('User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                  });
                };
                document.body.appendChild(installButton);
              }
            `}
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

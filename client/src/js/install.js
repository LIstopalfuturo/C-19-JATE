const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events
  deferredPrompt = event;
  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  // Show prompt
  deferredPrompt.prompt();
  // Reset the deferred prompt variable
  deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  deferredPrompt = null;
  console.log('PWA was installed');
});

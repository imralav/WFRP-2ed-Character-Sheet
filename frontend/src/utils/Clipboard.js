export default class Clipboard {
    static fallbackCopyTextToClipboard(text) {
        let textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.insertBefore(textArea, document.body.firstChild);
        textArea.focus();
        textArea.select();

        try {
            let successful = document.execCommand('copy');
            let msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }

    static copyTextToClipboard(text) {
        Clipboard.fallbackCopyTextToClipboard(text);
        // if (!navigator.clipboard) {
        //     Clipboard.fallbackCopyTextToClipboard(text);
        //     return;
        // }
        //TODO: find out why the code below does not work
        // navigator.clipboard.writeText(text).then(() => {
        //     console.log('Async: Copying to clipboard was successful!');
        // }).catch(err => {
        //     console.error('Async: Could not copy text: ', err, ' falling back');
        //     Clipboard.fallbackCopyTextToClipboard(text);
        // });
    }
}
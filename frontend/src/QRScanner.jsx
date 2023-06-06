import { useEffect } from "react"
import { Html5Qrcode } from "html5-qrcode"


function QRScanner() {

    const qrcodeRegionId = "reader"
    let html5QrCode = ""
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        console.log("Scan Result: ", decodedText);
        html5QrCode.stop().then((ignore) => {
          console.log("QR Code scanning is stopped.");
        }).catch((err) => {
          console.log("Stop failed, handle it.");
        });
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    const startScanning = () => {
       html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);
    }
    
    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
    }, [])

    return (
      <>
          <h1>QR Scanner</h1>
          <button onClick={startScanning}>Scan QR Code</button>
          <div id={qrcodeRegionId} width="600px"></div>
      </>
    )
}

export default QRScanner

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

    // Scan using camera
    const startScanning = () => {
       html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);
    }

    // Scan using image upload
    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0]
        html5QrCode.scanFile(imageFile, true)
        .then(decodedText => {
            // success, use decodedText
            console.log("Text decoded from QR code", decodedText)
        })
        .catch(err => {
            // failure, handle it.
            console.log(`Error scanning file. Reason: ${err}`)
        })
    }
    
    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
    }, [])

    return (
      <>
        <h1>QR Scanner</h1>
        <div id={qrcodeRegionId} width="600px">
            {/* Camera Scan */}
            <button onClick={startScanning}>Scan QR Code</button>

            {/* File upload Scan */}
            <label 
              htmlFor="qr-input-file" 
              className="inline-block bg-primary-blue rounded-lg px-6 py-4 text-white font-bold cursor-pointer text-lg"
            >
              Upload Image
            </label>
            <input
              className="text-white bg-primary-blue font-semibold hidden" 
              type="file" 
              id="qr-input-file" 
              accept="image/*" 
              onChange={handleImageUpload}
            />
        </div>
      </>
    )
}

export default QRScanner

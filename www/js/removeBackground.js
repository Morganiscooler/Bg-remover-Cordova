
// document.getElementById("clickSubmit").addEventListener("click", removeBackground);





// function removeBackground() {

//   var fileInput = document.getElementById("fileSelector");

//   var file = fileInput.files[0];

//   var formData = new FormData();

//   formData.append("image_file", file);

//   fetch("https://api.remove.bg/v1.0/removebg", {

//     method: "POST",

//     headers: {

//       "X-Api-Key": "eLcgDCLQUjrkVE42T5RZq4TV"

//       // "X-Api-Key": "8UvDuz97hr15MGsPGKfkadNS"

//     },

//     body: formData

//   })

//   .then(response => response.blob())

//   .then(blob => {

//     var url = URL.createObjectURL(blob);

//     var resultDiv = document.getElementById("imagePreview");

//     resultDiv.innerHTML = "";

//     var image = new Image();

//     image.src = url;

//     resultDiv.appendChild(image);



//     // Create download link

//     var link = document.createElement("a");

//   link.href = url;

//   link.download = "background_removed.png";

//   var span = document.createElement("span");

//   span.innerHTML = "Download <i class='fa fa-download'></i>";

  
//   span.style.position = "absolute";

//   span.style.bottom = "90%";

//   span.style.left = "25%";

//   span.style.fontSize = "25px";


//   link.appendChild(span);

//   resultDiv.appendChild(link);

//   async function getUniqueFilename(dirEntry, baseName, extension) {
//     return new Promise((resolve) => {
//         let counter = 1;
//         let newName = baseName + extension;

//         function checkFile() {
//             dirEntry.getFile(newName, { create: false }, () => {
//                 // File exists, try next number
//                 newName = `${baseName}_${counter}${extension}`;
//                 counter++;
//                 checkFile(); // Recursively check again
//             }, () => {
//                 // File does not exist, use this name
//                 resolve(newName);
//             });
//         }

//         checkFile(); // Start checking
//     });
// }
  
//   async function blobUrlToBase64(blobUrl) {
//     const response = await fetch(blobUrl);
//     const blob = await response.blob();
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result.split(',')[1]); // Extract base64 part
//         reader.onerror = reject;
//         reader.readAsDataURL(blob);
//     });
// }
// async function downloadBase64Image(base64Data, filename = 'downloaded_image') {
//   try {
//       // Ensure filename has no extension (we'll add it later)
//       const baseName = filename.replace(/\.[^/.]+$/, ""); // Remove existing extension
//       const extension = '.png';

//       // Get the Downloads directory path (Android)
//       const downloadsDir = cordova.file.externalRootDirectory + 'Download/';

//       // Resolve the directory
//       const dirEntry = await new Promise((resolve, reject) => {
//           window.resolveLocalFileSystemURL(downloadsDir, resolve, reject);
//       });

//       // Get a unique filename (e.g., "downloaded_image_1.png")
//       const uniqueFilename = await getUniqueFilename(dirEntry, baseName, extension);

//       // Write the file
//       const fileEntry = await new Promise((resolve, reject) => {
//           dirEntry.getFile(uniqueFilename, { create: true }, resolve, reject);
//       });

//       const fileWriter = await new Promise((resolve, reject) => {
//           fileEntry.createWriter(resolve, reject);
//       });

//       fileWriter.onwriteend = () => {
//           console.log(`Image saved as: ${uniqueFilename}`);
//           // Optionally open the file
//           cordova.plugins.fileOpener2.open(
//               fileEntry.toURL(),
//               'image/png',
//               { error: (e) => console.error('Error opening file:', e) }
//           );
//       };

//       fileWriter.onerror = (e) => console.error('Error writing file:', e);

//       // Convert base64 to a Blob and write
//       const byteCharacters = atob(base64Data);
//       const byteNumbers = new Array(byteCharacters.length);
//       for (let i = 0; i < byteCharacters.length; i++) {
//           byteNumbers[i] = byteCharacters.charCodeAt(i);
//       }
//       const byteArray = new Uint8Array(byteNumbers);
//       const blob = new Blob([byteArray], { type: 'image/png' });

//       fileWriter.write(blob);
//   } catch (e) {
//       console.error('Error:', e);
//   }
// }

// link.addEventListener("click", async () => {
//   const blobUrl = url; // e.g., from camera or fetched data
//   const base64Data = await blobUrlToBase64(blobUrl);
//   await downloadBase64Image(base64Data, 'downloaded_image.png');
//   alert('Image downloaded successfully! Check your downloads folder.');
// });
 
//   })

//   .catch(error => {

//     console.error(error);

//   });

// }




  
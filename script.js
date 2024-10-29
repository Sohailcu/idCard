function generateCard() {
  var name = document.getElementById('empName').value;
  var designation = document.getElementById('empDesignation').value;
  var department = document.getElementById('empDepartment').value;
  var cnic = document.getElementById('empCNIC').value;
  var contact = document.getElementById('empContact').value;
  var dateOfIssue = document.getElementById('dateOfIssue').value;
  var validTill = document.getElementById('validTill').value;

  // Set preview values (front side)
  document.getElementById('previewName').innerText = name;
  document.getElementById('previewDesignation').innerText = designation;
  document.getElementById('previewDepartment').innerText = department;
  document.getElementById('previewCNIC').innerText = cnic;
  document.getElementById('previewContact').innerText = contact;
  document.getElementById('previewIssue').innerText = new Date(dateOfIssue).toLocaleDateString();
  document.getElementById('previewValid').innerText = new Date(validTill).toLocaleDateString();

 // Generate QR Code for the back side using CNIC number or any text
 var qr = new QRious({
  element: document.getElementById('qrCodeBackCanvas'),
  value: cnic, // or any other value you'd like to encode in the QR code
  size: 150,   // Size of the QR code
  background: 'white',
  foreground: 'black'
});

  // Show the card preview (both front and back)
  document.getElementById('cardPreview').style.display = 'block';
}

function previewPhoto() {
  var file = document.getElementById('empPhoto').files[0];
  var reader = new FileReader();
  
  reader.onloadend = function () {
    document.getElementById('previewPhoto').src = reader.result;
  }
  
  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById('previewPhoto').src = "";
  }
}

function previewSignature() {
  var file = document.getElementById('authSign').files[0];
  var reader = new FileReader();
  
  reader.onloadend = function () {
    document.getElementById('previewSignature').src = reader.result;
  }
  
  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById('previewSignature').src = "";
  }
}

function resetForm() {
  document.getElementById('idCardForm').reset();
  document.getElementById('cardPreview').style.display = 'none';
  document.getElementById('previewPhoto').src = '';
  document.getElementById('previewSignature').src = '';
}

function printCard() {
  window.print();
}

function resetForm() {
  // Reset all form fields
  document.getElementById('empName').value = '';
  document.getElementById('empDesignation').value = '';
  document.getElementById('empDepartment').value = '';
  document.getElementById('empCNIC').value = '';
  document.getElementById('empContact').value = '';
  document.getElementById('dateOfIssue').value = '';
  document.getElementById('validTill').value = '';
  document.getElementById('empPhoto').value = '';

  // Reset the preview
  document.getElementById('previewName').innerText = '';
  document.getElementById('previewDesignation').innerText = '';
  document.getElementById('previewDepartment').innerText = '';
  document.getElementById('previewCNIC').innerText = '';
  document.getElementById('previewContact').innerText = '';
  document.getElementById('previewIssue').innerText = '';
  document.getElementById('previewValid').innerText = '';
  document.getElementById('previewPhoto').src = '';

  // Hide the card preview until new data is entered
  document.getElementById('cardPreview').style.display = 'flex';
}

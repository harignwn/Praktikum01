<?php 
    //proses yang dapat terjadi
    //mengambil data dari parameter input halaman  biodata
    $nama = $_POST['nama'];
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $no_hp = $_POST['no_hp'];
    $alamat= $_POST['alamat'];
    $DelInst =$_POST['inst'];
    $JumlahPizza = $_POST['JumPiz'];
    //menampilkan data 
    $Topping = implode(",", $_POST['Top']);
    //insert ke database
    //update delete data
    $email = $_POST['Email'];
    $Crus = $_POST['Crus'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="margin: 50px;" >
    <div style="background-color: #ffcbcb; padding: 20px;">
        <div class="head" style="text-align: center;">
             <h1>Thank You <?php echo $nama ?></h1>
        </div>
      <hr style="background-color: blue;">
      <p>Thank you for ordering from Black Goose Bistro. We received the following information about u=your order</p>
      <div class="yinformation">
      <h3 style="color: red;">Your Information</h3>
        <p style="margin-left: 30px;">
            <b>Name</b>  : <?php echo $nama?><br>
            <b>Address</b>  : <?php echo $alamat?><br>
            <b>Telephone Number</b>   : <?php echo $no_hp?><br>
            <b>Email Address</b>  : <?php echo $email?><br>

        </p>
        Delivery Instructions : <?php echo $DelInst?>
      </div>
      <h3 style="color: red;">
        Your Pizza
      </h3>
      <div class="pizza">
        <p style="margin-left: 30px;">
            Crust :<?php echo $Crus?><br>
            Toppings : <?php echo $Topping?><br>
            Number : <?php echo $JumlahPizza?>
        </p>
      </div>
    </div>
</body>
</html>
function myFunction() {
      var nama = document.getElementById('name');
      var email = document.getElementById('email');
      var negara = document.getElementById('negara', 'negara2');
      var tahun_lahir = document.getElementById('lahir');
      var jenis_kelamin = document.getElementsByName('kelamin');

      var opsinama = nama.value;
      var opsiemail = email.value;
      var opsinegara = negara.value;
      var opsiumur = lahir.value;
      var umurmu = 2020-lahir.value;
      var opsijeniskelamin = '';
      for (var i = 0; i < kelamin.length; i++) {
        if(kelamin[i].checked == true){
          opsijeniskelamin = kelamin[i].value;
          break;
        }
      }
      let tampilkan = document.getElementById('show');
      let menampilkan = '';
      if(opsinama == '' ||
      opsiemail == '' ||
      opsinegara == '' ||
      opsiumur == '' ||
      opsijeniskelamin == '') {
        if(opsinama == '') menampilkan += '<b>Mohon Masukkan Nama!</b><br></p>';
        if(opsiemail == '') menampilkan += '<b>Mohon Masukkan Email!</b><br></p>';
        if(opsinegara == '') menampilkan += '<b>Mohon Pilih Negara!</b><br></p>';
        if(opsiumur == '') menampilkan += '<b>Mohon Masukkan Tahun Lahir!</b><br></p>';
        if(opsijeniskelamin == '') menampilkan += '<b>Kamu Belum Memilih Jenis Kelamin!</b></p>';
      }else{
        menampilkan += `<b><h3>Selamat Datang di hiGirls!</h3>
        <table>
		      <tr>
		        <td>Nama Lengkap </td>
		        <td>:</td>
		        <td>${opsinama}</td>
		      </tr>
		      <tr>
		        <td>E-mail </td>
		        <td>:</td>
		        <td>${opsiemail}</td>
		      </tr>
		      <tr>
		        <td>Jenis Kelamin </td>
		        <td>:</td>
		        <td>${opsijeniskelamin}</td>
		      </tr>
		      <tr>
		        <td>Negara </td>
		        <td>:</td>
		        <td>${opsinegara}</td>
		      </tr>
		      <tr>
		        <td>Umur </td>
		        <td>:</td>
		        <td>${umurmu}</td>
		      </tr>
		    </table>`;
        }
    tampilkan.innerHTML = menampilkan;
  }
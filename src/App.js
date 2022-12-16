import { useState } from 'react';

// importando bibliotecas necessarias para gerar e baixar o qrcode
import QRcode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css';
import './estilo.css'

function App() {

  // Criando as variaveis
  const [link , setLink] = useState('');
  const [qrcodelink , setqrcodelink] = useState('');
  
  // funçao para gerar a img do qrcode
  function gerarArquivoQr(link_url){

    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,

    }, function(erro , url){
      setqrcodelink(url); 
    })
  }

  //
  function gerarQr(eve){

    // capturando o link digitado
    setLink(eve.target.value);
    //inserindo como parametro esse link na function
    gerarArquivoQr(eve.target.value)

  }
  return (
    <div className='container'>
        <div className='quadradoQrCode' >
      <h1 className='titulo'> Gerador de QRcode</h1>
        
     <QRcode value={link} />
    
     <input className='input'
      placeholder="Coloque seu link aqui... "

      value={link}
      onChange={(eve) => gerarQr(eve) }
     
     ></input>

      <a className='link' href={qrcodelink} download={'seuQrCode.png'}> Baixar a img do QrCode</a>
 
     </div>
      


 
    </div>
  );
}

export default App;


import Logo from '@/component/logo';
import React from 'react';
import "@/scss/main.scss"
import MainLayout from '@/layouts/main-layout';
import NMButton from '@/component/nm-button';


export default function About() {

  const handleClick = () => {
    alert('Butona tıklandı!');
  };

  return (
    <>
      <MainLayout header='Hoşgeldiniz!' description='Bilgilerinizi daha hızlı, etkili ve çevre dostu bir şekilde paylaşın. Modern ve şık dijital kartlarımız sayesinde, iletişim bilgilerinizi kolayca güncelleyebilir ve paylaşabilirsiniz. Kişisel markanızı güçlendirin ve her zaman bir adım önde olun.'>
     

       

<div className='index-container-type-1'>
          <div className="index-container ">
            <h1>Hakkımızda</h1>
            <p><strong>Dijital İş Kartı Dünyasına Hoşgeldiniz!</strong></p>
            <p>Biz, yenilikçi dijital çözümler sunarak iş dünyasında fark yaratmayı hedefleyen bir ekibiz. Misyonumuz, bireylerin ve işletmelerin profesyonel kimliklerini dijital platformlarda en etkili şekilde yansıtmalarını sağlamaktır.</p>
            <h2>Neler Yapıyoruz?</h2>
            <ul>
              <li><strong>Kişiselleştirilebilir Dijital İş Kartları</strong>: Kullanıcı dostu arayüzümüz ile herkes kendi tarzına uygun, estetik ve profesyonel iş kartlarını oluşturabilir.</li>
              <li><strong>Kolay Güncellenebilirlik</strong>: İletişim bilgilerinizdeki değişiklikleri anında güncelleyebilir, her zaman güncel kalabilirsiniz.</li>
              <li><strong>Çevre Dostu Çözümler</strong>: Kağıt kullanımını azaltarak çevreye katkıda bulunuyoruz.</li>
              <li><strong>Etkinlik ve Randevu Yönetimi</strong>: Dijital kartlarınızı etkinliklerinizde ve randevularınızda etkili bir şekilde kullanabilirsiniz.</li>
              <li><strong>Analitik ve İzleme</strong>: Kartlarınızın performansını takip edebilir, kimlerin görüntülediğini ve nasıl etkileşimde bulunduğunu görebilirsiniz.</li>
            </ul>
            <h2>Vizyonumuz</h2>
            <p>Teknolojiyi kullanarak iş dünyasında sürdürülebilir ve yenilikçi çözümler sunmak, dijital kimliklerinizi güçlendirerek profesyonel yaşamınızı kolaylaştırmak.</p>
            <h2>Bizimle İletişime Geçin!</h2>
            <p>Her türlü soru ve öneriniz için bizimle iletişime geçmekten çekinmeyin. Sizlere en iyi hizmeti sunmak için buradayız.</p>
            <p><strong>Dijital iş kartlarınızla fark yaratın, geleceğe adım atın!</strong></p>
          </div>
          </div>

      </MainLayout>
    </>
  );
}

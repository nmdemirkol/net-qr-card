
import Logo from '@/component/logo';
import React from 'react';
import "@/scss/main.scss"
import MainLayout from '@/layouts/main-layout';
import NMButton from '@/component/nm-button';


export default function Home() {

  const handleClick = () => {
    alert('Butona tıklandı!');
  };

  return (
    <>
      <MainLayout header='Hoşgeldiniz!' description='Bilgilerinizi daha hızlı, etkili ve çevre dostu bir şekilde paylaşın. Modern ve şık dijital kartlarımız sayesinde, iletişim bilgilerinizi kolayca güncelleyebilir ve paylaşabilirsiniz. Kişisel markanızı güçlendirin ve her zaman bir adım önde olun.'>
     

          <div className="index-container index-buttons-container">
            <NMButton onClick={handleClick}>Giriş Yap</NMButton>
            <NMButton variant="secondary" onClick={handleClick}>Hesap Oluştur</NMButton>
          </div>
{/** 
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
<div className='index-container-type-2'>
          <div className="index-container ">
          <h1>SSS - Sıkça Sorulan Sorular</h1>
        <div className="faq-item">
            <h2>1. Dijital iş kartı nedir?</h2>
            <p>Dijital iş kartı, geleneksel basılı kartvizitlerin dijital versiyonudur. Kişisel veya profesyonel iletişim bilgilerinizi dijital ortamda paylaşmanızı sağlar.</p>
        </div>
        <div className="faq-item">
            <h2>2. Dijital iş kartı nasıl oluşturulur?</h2>
            <p>Web sitemize kaydolduktan sonra, kullanıcı dostu arayüzümüz üzerinden kendi tarzınıza uygun dijital iş kartınızı kolayca oluşturabilirsiniz.</p>
        </div>
        <div className="faq-item">
            <h2>3. Dijital iş kartımı nasıl güncelleyebilirim?</h2>
            <p>Hesabınıza giriş yaptıktan sonra, iletişim bilgilerinizi güncelleyebilir ve değişiklikleri anında dijital iş kartınıza yansıtabilirsiniz.</p>
        </div>
        <div className="faq-item">
            <h2>4. Dijital iş kartımın performansını nasıl takip edebilirim?</h2>
            <p>Web sitemiz üzerinden kartınızın görüntülenme ve etkileşim verilerini izleyebilir, performansını ölçebilirsiniz.</p>
        </div>
        <div className="faq-item">
            <h2>5. Dijital iş kartımı nasıl paylaşabilirim?</h2>
            <p>Dijital iş kartınızı sosyal medya, e-posta veya diğer dijital platformlar aracılığıyla kolayca paylaşabilirsiniz. Ayrıca, QR kodu ile de paylaşım yapabilirsiniz.</p>
        </div>
        <div className="faq-item">
            <h2>6. Dijital iş kartları çevre dostu mu?</h2>
            <p>Evet, dijital iş kartları kağıt kullanımını azaltarak çevreye katkıda bulunur. Bu sayede daha sürdürülebilir bir çözüm sunar.</p>
        </div>
        <div className="faq-item">
            <h2>7. Dijital iş kartı ile basılı kartvizit arasındaki fark nedir?</h2>
            <p>Dijital iş kartları, basılı kartvizitlere göre daha çevre dostu, güncellenebilir ve paylaşılabilir. Ayrıca, dijital kartlar multimedya içerikleri de destekler.</p>
        </div>
        <div className="faq-item">
            <h2>8. Dijital iş kartları hangi cihazlarla uyumludur?</h2>
            <p>Dijital iş kartlarımız, bilgisayarlar, tabletler ve akıllı telefonlar dahil olmak üzere tüm modern cihazlarla uyumludur.</p>
        </div>
        <div className="faq-item">
            <h2>9. Dijital iş kartları güvenli mi?</h2>
            <p>Evet, dijital iş kartlarımız güvenli bir şekilde korunur ve sadece sizin belirttiğiniz kişilerle paylaşılır.</p>
        </div>
        <div className="faq-item">
            <h2>10. Dijital iş kartımı nasıl kişiselleştirebilirim?</h2>
            <p>Web sitemizde sunulan çeşitli tasarım şablonları ve özelleştirme seçenekleri ile dijital iş kartınızı kendi tarzınıza göre kişiselleştirebilirsiniz.</p>
        </div>
        <div className="faq-item">
            <h2>11. QR kodu nedir ve nasıl kullanılır?</h2>
            <p>QR kodu, dijital iş kartınızı hızlı ve kolay bir şekilde paylaşmanızı sağlayan bir barkod türüdür. Kartınızı paylaşmak için QR kodunu taratmanız yeterlidir.</p>
        </div>
        <div className="faq-item">
            <h2>12. Dijital iş kartları ücretli mi?</h2>
            <p>Dijital iş kartlarımız çeşitli paketlerde sunulmaktadır. Temel özellikleri ücretsiz olarak kullanabilir veya ek özellikler için premium paketlerimize geçiş yapabilirsiniz.</p>
        </div>
        <div className="faq-item">
            <h2>13. Destek almak için nereye başvurabilirim?</h2>
            <p>Her türlü soru ve sorunlarınız için destek ekibimize e-posta veya telefon yoluyla ulaşabilirsiniz. Ayrıca, web sitemizdeki canlı destek hizmetinden de yararlanabilirsiniz.</p>
        </div>
          </div>
        </div>*/}
      </MainLayout>
    </>
  );
}

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DuckCraft Dökümantasyon",
  description: "DuckCraft resmi dökümantasyonu — Towny rehberleri, kurallar, komutlar ve sunucuya katılım kılavuzları.",
  themeConfig: {
    siteTitle: 'DuckCraft Dökümantasyon',
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'Giriş Rehberi', link: '/giris/bilgisayar' },
      { text: 'Towny', link: '/towny/nedir' },
      { text: 'Kurallar', link: '/kurallar/genel' }
    ],
    sidebar: [
      {
        text: '🎮 GİRİŞ REHBERİ',
        items: [
          { text: 'Bilgisayar İçin Giriş Rehberi', link: '/giris/bilgisayar' },
          { text: 'Telefon İçin Giriş Rehberi', link: '/giris/telefon' }
        ]
      },
      {
        text: '🏰 TOWNY',
        items: [
          { text: 'Towny Nedir?', link: '/towny/nedir' }
        ]
      },
      {
        text: '📋 KURALLAR',
        items: [
          { text: 'Genel Kurallar ve Hizmet Politikası', link: '/kurallar/genel' },
          { text: 'Cezalandırma Süreci ve Şikayet Yönetimi', link: '/kurallar/cezalandirma' },
          { text: 'Sohbet Kuralları', link: '/kurallar/sohbet' },
          { text: 'Trap Kuralları', link: '/kurallar/trap' },
          { text: 'Claim Tacizi Kuralları', link: '/kurallar/claim-tacizi' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})

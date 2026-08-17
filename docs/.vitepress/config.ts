import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DuckCraft Dökümantasyon",
  description: "DuckCraft resmi dökümantasyonu — Kurallar, Towny rehberleri ve sistemler.",
  themeConfig: {
    siteTitle: 'DuckCraft Dökümantasyon',
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'Kurallar', link: '/kurallar/genel' },
      { text: 'Giriş Rehberi', link: '/giris/bilgisayar' },
      { text: 'Towny', link: '/towny/nedir' }
    ],
    sidebar: [
      {
        text: '📜 Kurallar',
        collapsed: false,
        items: [
          { text: 'Genel Kurallar', link: '/kurallar/genel' },
          { text: 'Cezalandırma ve Şikayet Yönetimi', link: '/kurallar/cezalandirma' },
          { text: 'Ceza Profili ve Ceza Sistemi', link: '/kurallar/ceza-sistemi' },
          { text: 'AAC Kontrolleri ve Kuralları', link: '/kurallar/aac' },
          { text: 'Dolandırıcılık İhlalleri', link: '/kurallar/dolandiricilik' },
          { text: '3. Parti Yazılımlar ve Yasaklı Modlar', link: '/kurallar/yasakli-modlar' }
        ]
      },
      {
        text: '📖 Rehberler & Sistemler',
        collapsed: false,
        items: [
          {
            text: '🎮 Giriş Rehberi',
            collapsed: false,
            items: [
              { text: 'Bilgisayar İçin Giriş Rehberi', link: '/giris/bilgisayar' },
              { text: 'Telefon İçin Giriş Rehberi', link: '/giris/telefon' }
            ]
          },
          {
            text: '🏰 Towny',
            collapsed: false,
            items: [
              { text: 'Towny Nedir?', link: '/towny/nedir' },
              { text: 'Kasaba Komutları', link: '/towny/kasaba-komutlari' },
              { text: 'Arsa Komutları', link: '/towny/arsa-komutlari' },
              { text: 'Ulus Komutları', link: '/towny/ulus-komutlari' },
              {
                text: '⚔️ Kuşatma Savaşları',
                collapsed: false,
                items: [
                  { text: 'Kuşatma Nedir?', link: '/towny/kusatma/nedir' },
                  { text: 'Kuşatma Kuralları', link: '/towny/kusatma/kurallar' },
                  { text: 'Kuşatma Komutları', link: '/towny/kusatma/komutlar' },
                  { text: 'Fethetme ve İsyan', link: '/towny/kusatma/fethetme-isyan' }
                ]
              }
            ]
          }
        ]
      },
      {
        text: '🔄 İade İşlemleri',
        collapsed: false,
        items: [
          { text: 'İade Politikası Ve İşleyişi', link: '/iade/iade-politikasi' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})

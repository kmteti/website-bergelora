export interface NewsItem {
  slug: string
  category: string
  title: string
  date: string
  image: string
  content: string
}

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet quam felis, eleifend convallis quam lacinia sit amet. Morbi mi odio, et suscipit elementum, vestibulum a leo. Sed nulla vulputate eros, a efficitur metus aliquet vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam viverra libero ligula, eget tempus felis accumsan at. Sed eu iaculis ligula, vitae imperdiet quam.

Etiam facilisis ex accumsan, lacinia dui in, blandit enim. Nulla facilisi. Curabitur a mauris elementum, vehicula dui vel, suscipit libero. Duis in semper orci, a elementum felis. Fusce eu turpis non odio ullamcorper tristique at ac enim. Proin lobortis mattis iaculis. Morbi id justo hendrerit, aliquet urna id, venenatis eros. Ut ut ligula hendrerit, convallis nibh in, mollis massa. Integer eu massa aliquam, porttitor tellus in, congue magna. Duis dignissim condimentum magna, a venenatis eros mollis non. Nunc accumsan erat vitae pretium faucibus. Praesent malesuada tincidunt sapien, eget accumsan felis malesuada ullamcorper. Quisque sem elit, blandit eu faucibus viverra, quam nec malesuada diam, eu eleifend lacus ante ut nulla. Donec accumsan metus elit, eu iaculis felis porttitor ut. Sed porta imperdiet porta. In lobortis nulla ultricies feugiat eleifend.

Maecenas commodo elementum libero a semper. Curabitur blandit, purus in vulputate pellentesque, odio sem iaculis erat, eu elementum felis mi eget mi. Integer rhoncus magna quis ex rutrum dapibus. Maecenas egestas massa nisl. Phasellus lacinia egestas risus pharetra. Quisque sed magna sed mauris iaculis molestie. Cras vel lectus eu elit aliquam laoreet. Integer iaculis sed elit id tempus. Duis faucibus, eros sollicitudin egestas venenatis, mauris nibh ultrices justo, in hendrerit lectus urna ac mauris. Nullam semper sollicitudin est in hendrerit. Mauris pellentesque pulvinar elit, vitae dapibus mi dictum convallis. Aliquam sodales aliquet ex eget consequat. Mauris lacus lorem, ultricies blandit diam id, elementum laoreet diam. Vestibulum porttitor nisl at urna egestas egestas varius.

Suspendisse tincidunt sit amet massa quis convallis. Praesent ullamcorper, metus nec aliquet congue, aliquam massa enim, id vehicula est tellus id nulla. Fusce sed nunc id lectus egestas euismod vel ut est. Nam ligula scelerisque arcu, semper lorem sapien quis nulla. Donec pulvinar ligula sed amet libero scelerisque volutpat vitae vel urna. Integer convallis commodo mauris. Nam ipsum sem, bibendum non erat vel, pretium sagittis lorem. Ut quis bibendum elit, ac porttitor metus. In vel velit justo. Nullam auctor lorem odio. Nullam ac iaculis velit, a eu faucibus risus. Cras vulputate nec metus nec blandit. Curabitur laoreet egestas condimentum. Quisque sit amet libero ipsum. Donec ornare viverra ligula, iaculis ultrices diam. Aliquam egestas risus id enim.`

export const ALL_NEWS_DATA: NewsItem[] = Array.from({ length: 50 }, (_, i) => ({
  slug: `mahasiswa-ugm-borong-dua-kemenangan-${i + 1}`,
  category: 'Press Release',
  title: i === 0 
    ? 'UGM Kenalkan Pertanian Cerdas Lewat Teknologi Agrivoltaic UGM Kenalkan Pertanian Cerdas Lewat Teknologi Agrivoltaic' 
    : `Mahasiswa UGM Borong Dua Kemenangan (Berita ${i + 1})`,
  date: '7 Juli 2026',
  image: `/images/home/hero/slide${(i % 3) + 1}.webp`,
  content: LOREM_IPSUM,
}))

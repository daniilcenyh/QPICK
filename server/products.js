const products = [
    {
        id : 1,
        img : "https://s3-alpha-sig.figma.com/img/087e/6171/64aabe57a3e7a6204314e43f1b2e93f0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJibWRBStfe838v00~~B~7SkJHZdIqorssdE75YXrRV5CPoNb1Nywbp73idx8Si~jGzwEpuXTXq5emH~FnmY~r8ref-DL-3B9tGf4clvBYZ2Zki8pquRYKLFHx~9Jx10jGP9BMlq4uDoqe4O52E8Hq-V1jvCTZ7X8Em3G9FPbvop6Zx891za9tBIwM3WYeUV6TYfycYOQGtIUzSOW3ejA5OKMYvguY1FE2ZhvRVrZ34ObJrIgOXgwwTQiM5nasBIwJYaIm51y8GupSj0vGoiKmwlKz-46alZ0VS2OwFZMuPfyqNi2K2VLEpFAJzrkbz2QqIge2~97LpcCqK3w0XkaA__" ,
        title : "Apple BYZ S852I",
        rate : 4.7,
        price : 2927,
        category : "Наушники",
        discription : "Наушники Apple BYZ S852I: Профессиональные наушники с отличным звуком и комфортабельным дизайном от Sennheiser, предназначенные для истинных аудиофилов и звукорежиссеров."
    },
    {
        id : 2,
        img : "https://s3-alpha-sig.figma.com/img/4c94/c058/dad214a07e3fe8bba69fdc64c01da9be?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4QIiIHbr1pcg6kHU8gXlwlzdqS84-rROk16X1bWr8ojmYtuIC0j~OCkATfhuxaw-NalP0dmglpRcy1iDxc5FNj0bhj~t8Ju1UdtMvQhm2fFVIbqHW2w3R~6gNhudbVLXfnc1kalrqE6WOBuPIUVXhf~rHftvozeM6CpIOra-cjLLR4xNUV15mjDojMV~KX7CJinGZN6um8fg2brwPP8c3bSmtU8pG3Vc3fNJwVto3-VfcBZ4O0DE5Eg7iUntii-IXZMDzlwKyjvoC2qVwyqpEjuzGs1qb0OvA15toRFH9tp1zlbKxNdkCZGlWUanlfF81GmXbHkAnf2I4ezrc2q8w__",
        title : "Apple EarPods",
        rate : 4.5,
        price : 2327,
        category : "Наушники",
        discription : "Наушники Apple EarPods: Идеальный выбор для аудиофилов и любителей технологий, эти беспроводные наушники обеспечивают высокое качество звука, активное шумоподавление и стильный дизайн."
    },
    {
        id : 3,
        img : "https://s3-alpha-sig.figma.com/img/9a61/d3e6/ebf088b546e3cb83d0fef126b458d80f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YyE2AQvuGOg~xLH-HkQj~8MT2Cs2IOqXjpwhL2y1hMBT0JnnmhhxMedWDbTVT0H1AbBWaZYrOzVlhucj85S6kSvdWCeTH0giYkDnKlYQgxD9rMHF~wWbwKaJ~clrLJ1RbFR17zWpXuP7PY4LMoRuR0kv9Q9UoWNU3eGaPtyIfftECiY-cGCkjdCSeBIbYBssbV~gdokUdaNIuEThVGeB0KozbdKUqDEdjHcGlb6W8AxXtz8rpoW4pjO0cdvhmUzziHMYCEg0VC3OHyYm7KA0M7L0a7qwe-zNh1x2m4DU1-kXThFVL18~5p1PLDujrsWsm4NO96m3V6C5pODp4VVZ4w__" ,
        title : "Apple EarPods",
        rate : 4.5,
        price : 2327,
        category : "Наушники",
        discription : "Наушники Apple EarPods: Портативные и доступные беспроводные наушники с мощным звучанием от JBL, идеальный выбор для тех, кто ценит качество звука и комфорт при носке."
    },
    {
        id : 4,
        img : "https://s3-alpha-sig.figma.com/img/79e9/6576/3612c82723783fd36de4be8792b410c8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOMuh3BA-AQQBhDo1vaI9jhJV2Cio8CiIky0die33rKIgTvcqmlLhYEDvjdGMaFEsksjmMsVah6fOgWg-gqwiw62wj3rBoswVHAYfM7Mo2i1wRZFD5RaDJgeDPbyrY3hHr-VrFxEalDGMRDPo2wyTPMRK7zasGKX1pm3gF9HMznOaK318wmaQ89ZEUAJk5ioYEAR7SmyEms~bl9RJ34d-VcxWMN0wp9Q8ARKoBsP~ZdXJAkyveUWcKON1h4eJuQ54zeHoT24HSGIDPMMqUoTPKGCM26ZRDmih7tWC6M2QPH1OGj3X0mjjJsdRvj~mdDVlH-kYgnD5MSHG3di5gQrGg__",
        title : "Apple AirPods",
        rate : 4.7,
        price : 9527,
        category : "Беспроводные наушники",
        discription : "Наушники Apple AirPods Pro: Эти компактные и удобные наушники от Apple предлагают превосходное качество звука, активное шумоподавление, удобное управление прикосновениями и стильный дизайн."
    },
    {
        id : 5,
        img : "https://s3-alpha-sig.figma.com/img/8856/1fad/de8774bba5aeb1888e3a4bb69a5d9d6b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLZ6CBl3dfL94-HFmyrvsqhGVF7FhccRBWUn~lYevG6BzgTc7SzPy8G4MphzdnWovpsFN6EbwD9f04XoMyWaV~nUfUDgSe7Jnqo85ODcRt1VRF42TDZ39Z6uww0f2a23ch4jFltkInO~Q93HZI3vgbZK2yiC0g8u979b93LuNusvhgb6C1a8rtS6cUzNrYnM6Sya4q9YuFQEcdgK~OC66lptYleRRUy0ZSrpb4Gmqo2sEzJweTYUma9WvHENVz-~6giYoUqyXRtTm5i6GXSTV0IonExBP9i9FCm9c8fEr6e4JFvEsp7HyCQWaqM-rKwiNdBKTGFtyzrqNYqm3QKNag__",
        title : "GERLAX GH-04",
        rate : 4.7,
        price : 6527,
        category : "Беспроводные наушники",
        discription : "Наушники GERLAX GH-04: Сочетая высокое качество звука, отменное шумоподавление и комфортную посадку, эти наушники от Bose подойдут как для повседневного использования, так и для путешествий."
    },
    {
        id : 6,
        img : "https://s3-alpha-sig.figma.com/img/6e2a/127e/65528ef2ba5eb346ae0e4abe50fa02ee?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gdpEuP1DbJhOR3FoIIqaQc2a2zESd9o3aiHHbVlILmfoLhwsr~P3TrFSpCv9dS6LL3eQrcALdQXaULFC1t087F5pgsRtizza5sKRX944~n7-~U2BKuD7~SLmNmLJK3DJkpzynAbIBeusj9GIgPAC7mgeMikgxgD4FdZBL-fHnJK-y7CUPuydlGbtq~9sCsipQn3YjsHItPl4LiPmDx8O3j7kwX~~9~P59GcpXiBha-LZZTAa25ori1bZB--Fzw5pOzPZGXiq6OyMTMF-oW62nAenISu1K1SZEujmKvCslsmhn9N67vUWrCWIflkO3cnw1G7a5WwNdcKd3r-x4UEIDg__",
        title : "BOROFONE BO4",
        rate : 4.7,
        price : 7527,
        category : "Беспроводные наушники",
        discription : " Наушники BOROFONE BO4: Стильные и энергичные наушники от Beats, обеспечивающие потрясающее качество звука, активное управление шумоподавлением и долгое время работы без подзарядки. Идеальный выбор для любителей активного образа жизни."
    },
]

module.exports = products;
const quotes = [
  {
    quote: '簡単すぎる人生に、<br>生きる価値などない',
    author: 'ソクラテス',
  },
  {
    quote: 'できないことに気を取られずに、<br>できることをやりなさい。',
    author: 'ジョン・ウッデン',
  },
  {
    quote: '心がすべてである。<br>あなたはあなたの考えたとおりになる。',
    author: 'ブッダ',
  },
  {
    quote: '希望さえ手に掴んでいれば、<br>不可能なことなどない。',
    author: 'クリストファー・リーヴ',
  },
  {
    quote: '最高の夢は目覚めてる時に見る。',
    author: 'チャールズ・ギルダーブルーム',
  },
  {
    quote: '常識とは１８歳までに身に付けた<br>偏見のコレクションのことを言う',
    author: 'アインシュタイン',
  },
  {
    quote: '大好きなことに情熱のすべてを注ぎなさい',
    author: 'ジムロジャース',
  },
  {
    quote: '事を遂げる者は愚直でなければならぬ。<br>才走ってはうまくいかない。',
    author: '勝海舟',
  },
  {
    quote: '自分にはできると信じれば、あなたはもう道半ばまで来ている',
    author: 'セオドア・ルーズベルト',
  },
  {
    quote: '我々の人生は我々の後にも前にも、側にもなく、我々の中にある',
    author: 'ジャック・プレヴェール（フランスの詩人）',
  },
];

const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;

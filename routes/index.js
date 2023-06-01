var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    count: 25,
  });
  // res.render('index', { title: '멋쟁이사자처럼' });
});

let nextId = 24; // 다음으로 할당될 ID를 추적하기 위한 변수
let posts = [
  {
    id: 23,
    title: "찬성을 얻은 때",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 22,
    title: "모 신임·얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 21,
    title: "모의 자유며을 얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 20,
    title: "모준하고, 을 신며을 얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 19,
    title: "모든 국민은을 신며을 얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 18,
    title: "교사절을 신며을 얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 17,
    title: "국는 파견하며을 얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 16,
    title: "국회의 의결을 얻어",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 15,
    title: "대통령은 즉시석",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 14,
    title: ". 제2항의 찬성을  출석",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 13,
    title: ".대통령은 국회에 출석",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 12,
    title: "조직·직무범위 기타",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 11,
    title: "며, 외국에 대하여 .",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 10,
    title: "이 헌법시행법에 위배되지다.",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 9,
    title: "고다, 력을 지속본다.",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 8,
    title: "고다. 국가안전보장본다.",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 7,
    title: "국모든 국미은 중교의",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 6,
    title: "국회는 헌법 또는",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 5,
    title: "대통령이 임명하는 3인",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 3,
    title: "새벽 코딩... 잠이 와요...",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 2,
    title: "멋쟁이사자처럼 화이팅!",
    contents: "내용은 찾아 넣기가 너무 어려워서,,,",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
  {
    id: 1,
    title: "이건 아니지",
    contents: "잘 되나 보자",
    repls: ["잘 되면 보자라니.. 응원해줘", "그래 응원해주자!!"],
  },
]; // 생성된 포스트들을 저장하는 배열

router.get("/api/list", function (req, res, next) {
  // 쿼리 파라미터에서 페이지와 페이지 크기 추출
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.page_size) || 10;

  // 페이지네이션을 위해 데이터 슬라이싱
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const slicedPosts = posts.slice(startIndex, endIndex);
  const results = slicedPosts.map(({ id, title }) => ({ id, title }));

  res.json({
    count: posts.length,
    // previous: null,
    results: results,
  });
});

router.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const foundPost = posts.find((post) => post.id === postId);

  res.json(foundPost);
});

/* 게시물 작성 */
router.post("/api/posts", (req, res) => {
  const { title, contents } = req.body;

  const post = {
    id: nextId++,
    title,
    contents,
    repls: [],
  };

  post.title = title;
  post.contents = contents;

  posts.unshift(post);

  res.json(post);
});

// 댓글 작성
router.post("/api/repl", (req, res) => {
  const { contents, post } = req.body;

  // const repl = {
  //   contents,
  //   post,
  // };

  const index = posts.findIndex((e) => e.id === post);
  if (index !== -1) {
    let repl = posts[index].repls;
    repl.push(contents);

    posts[index].repls = repl;
  }

  const response = {
    id: posts[index].repls.length,
    contents: contents,
    post: post,
  };

  res.json(response);
});

module.exports = router;

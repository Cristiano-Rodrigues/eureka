export function GET (req: Request) {
  return {
    code: 200,
    message: "Hello, there!",
    data: {
      url: req.url
    }
  }
}
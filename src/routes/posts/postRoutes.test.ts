import request from "supertest";
import { postRoute } from "./postsRoute";
const bouchonApiGetSinglePost = require('../../data/apiGetSinglePost.json');

describe("Test API routes", () => {
  describe("should be test Get API endpoint", () => {
    it("should be return all posts with url <</posts>> using Get API endpoint", () => {
      request(postRoute)
        .get("/api/v1/posts")
        .expect(200)
        .expect("Content-Type", "application/json")
        .expect((res) => {
          res.body = "Hello world";
        });
    });

    it("should be return specific post with url <</post/pole-emploi-a-propos>>", () => {
      request(postRoute)
        .get("/api/v1/post/pole-emploi-a-propos")
        .expect(200)
        .expect("Content-Type", "application/json")
        .expect((res) => {
            res.body = bouchonApiGetSinglePost;
          });
    });
  });
});

import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Home({ type }) {
  //TODO: fix style when clicking to subscription
  const [videos, setVideos] = useState([]);
  useEffect(
    function () {
      //Need To handle errors
      const fetchVideos = async () => {
        const res = await axios.get(`/videos/${type}`);
        setVideos(res.data);
      };

      fetchVideos();
    },
    [type]
  );
  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}></Card>
      ))}
    </Container>
  );
}

export default Home;

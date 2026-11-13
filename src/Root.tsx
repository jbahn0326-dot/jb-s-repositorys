import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

// 세로 영상 설정: 9:16, 1080x1920, 30fps, 5초
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={150}
      defaultProps={{
        title: "안녕하세요!",
        subtitle: "Remotion 세로 영상",
      }}
    />
  );
};

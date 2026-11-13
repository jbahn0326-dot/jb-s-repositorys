import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  title: string;
  subtitle: string;
};

export const MyVideo: React.FC<Props> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12 } });
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #4f46e5 0%, #db2777 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
        color: "white",
        textAlign: "center",
        padding: 80,
      }}
    >
      {/* 나레이션 목소리 (public/narration.mp3) */}
      <Audio src={staticFile("narration.mp3")} />
      <div
        style={{
          fontSize: 140,
          fontWeight: 800,
          transform: `scale(${titleScale})`,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 64, marginTop: 40, opacity: subtitleOpacity }}>
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};

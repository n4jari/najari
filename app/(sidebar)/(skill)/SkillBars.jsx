const SkillBars = ({ level }) => {
  if (level === "beginner") {
    return (
      <>
        <div style={{ backgroundColor: "#ffc107" }} />
        <div />
        <div />
      </>
    );
  }
  if (level === "intermediate") {
    return (
      <>
        <div style={{ backgroundColor: "#ffc107" }} />
        <div style={{ backgroundColor: "#ffc107" }} />
        <div />
      </>
    );
  }
  if (level === "professional") {
    return (
      <>
        <div style={{ backgroundColor: "#ffc107" }} />
        <div style={{ backgroundColor: "#ffc107" }} />
        <div style={{ backgroundColor: "#ffc107" }} />
      </>
    );
  }
};

export default SkillBars;

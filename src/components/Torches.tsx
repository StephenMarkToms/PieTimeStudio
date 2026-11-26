export function Torches() {
  return (
    <>
      <span className="torch torch-l" aria-hidden="true">
        <span className="torch-glow" />
        <span className="torch-flame">
          <i />
          <i />
          <i />
        </span>
      </span>
      <span className="torch torch-r" aria-hidden="true">
        <span className="torch-glow" />
        <span className="torch-flame">
          <i />
          <i />
          <i />
        </span>
      </span>
    </>
  );
}

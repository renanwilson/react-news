import './styles.scss';
export function Loading() {
  return (
    <div className="spinner" data-testid="loading">
      <span className="spinner-inner-1"></span>
      <span className="spinner-inner-2"></span>
      <span className="spinner-inner-3"></span>
    </div>
  );
}

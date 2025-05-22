export default function DAaccordion({ id, className, span, children, role }) {
    return (
      <div className="accordion-item">
        <div className={className} id={id} data-bs-toggle="collapse" data-bs-target={'#${id}-content'} aria-controls={'${id}-content'} aria-expanded="true" role={role}>
          <span className={className}>{span}</span>
        </div>
        <div id={'${id}-content'} className={className} aria-labelledby={id} data-bs-parent="#accordionOne">
          <div className={className}>
            {children}
          </div>
        </div>
      </div>
    );
  }
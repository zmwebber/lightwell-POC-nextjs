export const ComponentTitle: React.FC<{
  titleText: string;
}> = ({ titleText }) => (
  <div className="pageTitle">    
        <h1>
          <span className="light">{titleText}</span>
        </h1>
  </div>
);

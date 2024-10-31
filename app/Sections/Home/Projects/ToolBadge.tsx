import './ToolBadge.css'; 

const ToolBadge = ({ icon, name, className}: { icon: React.ReactNode, name: string, className: string }) => {
  return (
    <li className={`ToolBadge ${className}`}>
      <span>
        {icon}
        {name}
      </span>
    </li>
  );
}

export default ToolBadge;

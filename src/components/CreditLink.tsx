import styled from "styled-components";
import colors from "../configs/colors";

interface Props {
  desc: string;
  url: string;
}

const CreditLink: React.FC<Props> = ({desc, url}) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={url}>
      {desc}
      <br />
    </Link>
  );
};

const Link = styled.a`
  color: white;
  font-size: 12px;
  font-style: italic;
  font-weight: 500;

  &:hover {
    color: ${colors.yellow};
  }
`;

export default CreditLink;

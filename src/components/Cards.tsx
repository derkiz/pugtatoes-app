interface Props {
  paramId: string;
  STRAPI_APP_BASE_URL: string;
}

const Cards: React.FC<Props> = ({ paramId, STRAPI_APP_BASE_URL }) => {
  return (
    <div>
      <p>Param ID: {paramId}</p>
      <p>Strapi App Base URL: {STRAPI_APP_BASE_URL}</p>
      <p>Cards</p>
    </div>
  );
};

export default Cards;

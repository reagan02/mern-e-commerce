import PropTypes from "prop-types";

const Section = (props) => {
  return (
    <div className="w-full xs:mt-7 md:mt-14">
      <div className="flex pt-4">{props.subtitle}</div>
      <div className="flex mt-5 h-15 mb-5">
        {/* title and  context*/}
        {props.title}
        {props.context}
        <div className="flex grow justify-end ">{props.component}</div>
      </div>
      <div className="">{props.body}</div>
      <div className="flex justify-center items-center my-10 w-full">
        {props.showButton}
      </div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  subtitle: PropTypes.object.isRequired,
  title: PropTypes.object,
  context: PropTypes.element,
  component: PropTypes.object,
  showButton: PropTypes.object,
  body: PropTypes.object,
};

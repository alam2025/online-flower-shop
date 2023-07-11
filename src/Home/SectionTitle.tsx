interface SectionTitleProps{
      title:string;
      des:string;
}
const SectionTitle:React.FC<SectionTitleProps> = ({title, des}) => {
      return (
            <div className=" text-center md:w-1/2 mx-auto my-16">
                  <h1 className=" text-3xl font-extrabold">{title}</h1>
                  <p>{des}</p>
            </div>
      );
};

export default SectionTitle;
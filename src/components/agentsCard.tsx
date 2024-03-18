import agentImg from "/src/assets/Michele.png";

type Agents = {
  img: string;
  name: string;
  summary: string;
}[];

export const Agent = () => {
  const agents: Agents = [
    { img: agentImg, name: "", summary: "" },
    { img: agentImg, name: "", summary: "" },
    { img: agentImg, name: "", summary: "" },
    { img: agentImg, name: "", summary: "" },
  ];
  return (
    <div className='my-3'>
      <div className='font-bold p-2'>Agents We Associate with in USA </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col  justify-center items-center md:flex-row md:justify-between'>
          {agents.map((item) => (
            <div className='relative w-60 space-x-2 shadow-md rounded m-2 p-2 flex flex-col justify-between items-center text-center hover:bg-blue-600 hover:bg-opacity-10'>
              <img src={item.img} className='' />
              <div>
                <h1 className='font-bold text-blue-600 text-2xl'>
                  Michele Rolling
                </h1>
                <span>Company Agent</span>
                <p className='text-sm text-[gray]'>
                  {" "}
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  Phasellus Porta Justo Eget Risus Consectetur,..
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

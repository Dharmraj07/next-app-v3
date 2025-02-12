const page =async ({params}) => {

    const data=(await params).folderName;
    console.log(data);

  return (
    <>
      <h1>this is shop page</h1>
    </>
  );
};

export default page;

import { Grid, GridColumn } from "@/layouts/Grid";

const Homepage = () => {
  return (
    <>
      <Grid>
        <GridColumn styles="bg-purple-500">
          Col 1
        </GridColumn>
        <GridColumn styles="bg-red-500">Col 2</GridColumn>
      </Grid>
    </>
  );
};

export default Homepage;

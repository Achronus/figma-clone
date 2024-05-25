type GridColumnProps = {
  children: React.ReactNode;
  styles: string;
};

type GridColumnElement =
  React.ReactElement<GridColumnProps>;

type GridProps = {
  children: GridColumnElement | GridColumnElement[];
};

const GridColumn = ({
  children,
  styles,
}: GridColumnProps) => {
  return <div className={styles}>{children}</div>;
};

const Grid = ({ children }: GridProps) => {
  return (
    <section className="grid grid-cols-2 gap-4">
      {children}
    </section>
  );
};

export { Grid, GridColumn };

import CardRooteasy from "@/components/common/card-rooteasy/CardRooteasy";
import IRootEasy from "@/types/IRootEasyAdd";

interface RooteasyListProps {
  data: IRootEasy[];
}

function RooteasyList({ data }: RooteasyListProps) {
  return (
    <div className="register-page more-before overflow-y-scroll p-0">
      {data.map((item) => (
        <div key={item.icon}>
          <CardRooteasy data={item} />
        </div>
      ))}
    </div>
  );
}

export default RooteasyList;

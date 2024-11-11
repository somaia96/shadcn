import { txtSlicer } from "../../utils/functions";
import { IMembers } from "../../interfaces";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
function Member({ member }: { member: IMembers }) {
  return (
    <Card className="h-full">
      <CardHeader shadow={false} floated={false} >
      {member.photo ? <img src={typeof(member.photo) == "string"? member.photo : ""} 
        alt="card-image" 
        className="lg:h-[224px] w-full object-cover" /> : <img
          src={`/images/empty.jpg`}
          alt="card-image"
          className="lg:h-[224px] w-full object-cover"
        />}
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center ">
        <Typography variant="h4" className="mb-2 text-primary uppercase text-sm">
          {member.name}
        </Typography>
        <Typography variant="small" color="blue-gray" className="mb-2 text-sm text-gray-600">
          {member.job_title}
        </Typography>
        <Typography variant="paragraph" color="blue-gray" className="text-gray-600">
          {txtSlicer(member.description, 150)}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Member;

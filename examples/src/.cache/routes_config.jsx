import * as Pages1 from "@/pages";
import * as PagesUri2 from "@/pages/uri";
import * as PagesValidate3 from "@/pages/validate";
const { default:Pages1Default,...Pages1Other  } = Pages1;
const { default:PagesUri2Default,...PagesUri2Other  } = PagesUri2;
const { default:PagesValidate3Default,...PagesValidate3Other  } = PagesValidate3;

export default  [
{ path:"/",...Pages1Other },
	{ path:"/uri",...PagesUri2Other },
	{ path:"/validate",...PagesValidate3Other },];

import "./tasks.css";

export default function Tasks() {
  const data = [
    {
      id: 1,
      payload: "domain.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
    {
      id: 2,
      payload: "doo.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
    {
      id: 3,
      payload: "suck.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
    {
      id: 2,
      payload: "doo.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
    {
      id: 3,
      payload: "suck.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
    {
      id: 2,
      payload: "doo.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
    {
      id: 3,
      payload: "suck.com",
      type: "Sensitive Files Disclosure",
      started: "8/18/2023, 7:14:07 AM",
      completed: "8/18/2023, 10:42:54 AM",
      link: "https://prettyrecon.com/target/dvb.corpinter.net/sensitive_files/",
    },
  ];
  return (
    <section>
      <table className="w-full table-auto">
        <tr className="bg-zinc-800 ">
          <th className="text-center">#</th>
          <th>
            <div>Payload</div>
          </th>
          <th>
            <div>Type</div>
          </th>
          <th>
            <div>Started</div>
          </th>
          <th>
            <div>Completed</div>
          </th>
          <th>
            <div>Link</div>
          </th>
        </tr>
        {data.map((each) => (
          <tr key={each.id}>
            <td>{each.id}</td>
            <td>{each.payload}</td>
            <td className="text-yellow-400">{each.type}</td>
            <td>{each.started}</td>
            <td>{each.completed}</td>
            <td>
              <a className="text-yellow-400" href={each.link}>
                Visit
              </a>
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
}

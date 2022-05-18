import { Table, TableProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { User } from "./search-panel";
// import { BrowserRouter as Router } from "react-router-dom";
export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number
}
interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        {
          title: "名称",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>
          }
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render: (value, project) => (
            <span>
              {users.find((user: User) => user.id === project.personId)?.name}
            </span>
          ),
        },
        {
          title: "创建时间",
          render(value, project) {
            return <span>
              {/* {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'} */}
              无
            </span>
          }
        },
      ]}
      {...props}
    />
  );
};
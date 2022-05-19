import { useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce, useDocumnetTitle } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import {useProjects} from 'utils/project'
import { useUsers } from "utils/user";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 200);
  const { isLoading, error, data: list, retry } = useProjects(debouncedParam)
  const { data: users } = useUsers()
  useDocumnetTitle('项目列表', false)
  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {
        error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null
      }
      <List refresh={retry} loading={isLoading} dataSource={list|| []} users={users || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`

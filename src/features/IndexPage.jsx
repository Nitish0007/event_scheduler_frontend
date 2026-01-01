import { useState } from 'react';
import { Table, Pagination, Group, Button, Text, Card, Loader, Center, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

const IndexPage = ({ data }) => {
  const { title, subtitle, actions, service, path, params, columns } = data;
  const [activePage, setPage] = useState(1);
  const PAGE_SIZE = 10;

  const { data: response, isLoading, isError, error } = useQuery({
    queryKey: [path, activePage, params],
    queryFn: () => service.index(path, { ...params, page: activePage, per_page: PAGE_SIZE }),
    placeholderData: keepPreviousData,
  });

  const responseBody = response?.data;
  const records = responseBody?.data?.events || [];

  // Pagination Meta
  const totalPages = responseBody?.meta_data?.total_pages || 1;

  if (isLoading) {
    return (
      <Center h={400}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center h={400}>
        <Text c="red">Error loading data: {error.message}</Text>
      </Center>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1200px] mx-auto p-4">
      <div className="flex justify-between items-center">
        <div>
          <Title order={2}>{title}</Title>
          <Text c="dimmed">{subtitle}</Text>
        </div>
        {actions && (
          <Group>
            {actions.map((action) => (
              <Button component={Link} to={action.path} key={action.label}>
                {action.label}
              </Button>
            ))}
          </Group>
        )}
      </div>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Table striped highlightOnHover horizontalSpacing="md" verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              {columns.map((column) => (
                <Table.Th key={column.field}>{column.title}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {records.length > 0 ? (
              records.map((item) => (
                <Table.Tr key={item.id}>
                  {columns.map((column) => (
                    <Table.Td key={column.field}>
                      {item[column.field]}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={columns.length} align="center">
                  <Text c="dimmed" py="xl">No records found</Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>

        <Group justify="space-between" mt="md">
          <Text size="sm" c="dimmed">
            Page {activePage} of {totalPages}
          </Text>
          <Pagination
            total={totalPages}
            value={activePage}
            onChange={setPage}
            color="blue"
            size="sm"
            withEdges
          />
        </Group>
      </Card>
    </div>
  );
};

export default IndexPage;
import { useState } from 'react';
import { Container, Group, Burger, Text, Menu, UnstyledButton, Avatar, rem } from '@mantine/core';
import { IconLogout, IconChevronDown } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useSidebarStore } from '../store/sidebarStore';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { isOpen, toggleSidebar } = useSidebarStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-[70px] border-b border-gray-200 bg-white sticky top-0">
      <Container fluid className="h-full">
        <div className="h-full flex justify-between items-center">
          
          <Group gap={20} visibleFrom="xs">
            <Burger opened={isOpen} onClick={toggleSidebar} />
            <Text
              fw={700}
              size="xl"
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              className="cursor-pointer select-none"
              onClick={() => navigate('/dashboard')}
            >
              EventScheduler
            </Text>
          </Group>

          {/* User Menu */}
          <Group visibleFrom="xs">
            {user ? (
              <Menu
                width={200}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton
                    className={`
                        flex items-center px-3 py-2 rounded-md transition-colors 
                        hover:bg-gray-100 ${userMenuOpened ? 'bg-gray-100' : ''}
                    `}
                  >
                    <Group gap={7}>
                      <Avatar src={null} alt={user.name} radius="xl" size={30} color="blue">
                        {user.name?.charAt(0).toUpperCase()}
                      </Avatar>
                      <div className='flex items-center gap-1'>
                        <div>
                          <Text fw={500} size="sm" lh={1} mr={3}>
                            {user.name}
                          </Text>
                          <Text fw={500} size="xs" c="dimmed" lh={1} mr={3}>
                            {user.role}
                          </Text>
                        </div>
                        <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                      </div>
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                    color="red"
                    onClick={handleLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              // Fallback if somehow rendered without user (optional)
              null
            )}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
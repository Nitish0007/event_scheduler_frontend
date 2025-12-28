import { useAuthStore } from "../../store/authStore";
import IndexPage from "../../features/IndexPage";
import { Navigate } from "react-router-dom";
import { eventsService } from "../../services/events_service";

const EventsIndexPage = () => {
  const userData = useAuthStore((state) => state.user);
  if(!userData) {
    return <Navigate to="/" replace />
  }
  
  const indexPageProps = {
    title: "Events",
    subtitle: "List of all events",
    actions: [],
    service: eventsService,
    path: `/${userData.id}/events`,
    params: {}
  }
  
  const role = userData.role;
  if(role === "organizer") {
    indexPageProps.actions.push({
      label: "Create Event",
      path: "/events/new"
    })
  }

  return (
    <IndexPage data={indexPageProps} />
  )
}

export default EventsIndexPage;
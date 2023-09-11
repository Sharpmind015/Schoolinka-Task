import { createTodo } from "$/network/todos";
import Button from "../Button/Button";
import TaskForm from "../TaskForm/TaskForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <TaskForm
        handleSubmit={(task) =>
          mutation.mutate({
            completed: true,
            title: task,
          })
        }
        heading="Add Task"
        task=""
        time=""
        buttonEls={
          <div className="flex gap-3">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default CreateTask;

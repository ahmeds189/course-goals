export function EmptyList() {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-2 mt-8"
      >
        <path
          opacity="0.14"
          d="M16 6.99995H8V5C7.01165 5.00077 6.49359 5.01333 6.09202 5.21794C5.71569 5.40968 5.40973 5.71564 5.21799 6.09197C5 6.51979 5 7.07984 5 8.19995V17.7999C5 18.9201 5 19.4801 5.21799 19.9079C5.40973 20.2843 5.71569 20.5902 6.09202 20.782C6.51984 20.9999 7.0799 20.9999 8.2 20.9999H15.8C16.9201 20.9999 17.4802 20.9999 17.908 20.782C18.2843 20.5902 18.5903 20.2843 18.782 19.9079C19 19.4801 19 18.9201 19 17.7999V8.19995C19 7.07984 19 6.51979 18.782 6.09197C18.5903 5.71564 18.2843 5.40968 17.908 5.21794C17.5064 5.01333 16.9883 5.00077 16 5V6.99995Z"
          fill="black"
        />
        <path
          d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M12 15H9M15 11H9"
          className="stroke-muted"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p>Empty list!</p>
      <p className="text-muted text-sm">start by adding goals.</p>
    </div>
  );
}
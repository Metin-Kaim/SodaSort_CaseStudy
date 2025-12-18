using System.Collections;
using UnityEngine;

namespace Assets.SodaPlayable.Scripts
{
    public class BottleSpawnController : MonoBehaviour
    {
        [SerializeField] private BottleHandler bottlePrefab;
        [SerializeField] private Vector2 gridSize;
        [SerializeField] private float xDistance;
        [SerializeField] private float yDistance;

        private void Start()
        {
            for (int x = 0; x < gridSize.x; x++)
            {
                for (int y = 0; y < gridSize.y; y++)
                {
                    BottleHandler bottleHandler = Instantiate(bottlePrefab, new Vector2(x * xDistance, -y * yDistance), Quaternion.identity, transform);
                }
            }
        }
    }
}